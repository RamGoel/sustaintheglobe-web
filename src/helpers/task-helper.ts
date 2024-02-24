/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../utils/firebase";
import { toast } from "react-toastify";
type taskStatusType = {
  expiryStatus: boolean;
  taskID: "0";
};

export const getTimeStampLikeJava = () => {
  const date = new Date();
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "UTC", // Adjust this according to your requirements
  };

  return date.toLocaleString("en-US", options as any);
};
const getCurrentTasks = async (userId: string) => {
  return await getDoc(doc(db, "Users", userId));
};

const createTaskStruct = async (userId: string) => {
  const data = await getCurrentTasks(userId);

  if (data.exists() && data.data().length) {
    return data.data();
  } else {
    const taskList: taskStatusType[] = [0, 0, 0, 0].map(() => {
      return {
        taskID: "0",
        expiryStatus: true,
      };
    });

    return taskList;
  }
};

export const assignTasksMaster = async (userId: string) => {
  const currentTasks: string[] = [];
  const expiryStatus: string[] = [];

  const userTasksStatus = await createTaskStruct(userId);

  userTasksStatus?.forEach((item: taskStatusType) => {
    currentTasks.push(item.taskID);
    expiryStatus.push(item.expiryStatus.toString());
  });

  const totalExpiredTasks = expiryStatus.reduce((acc, curr) => {
    if (curr) acc++;
    return acc;
  }, 0);


  if (!totalExpiredTasks) {
    return;
  } else {
    let count = 0;
    const finalCount = totalExpiredTasks;

    const tasksArray: any = [];
    expiryStatus.forEach((item: string, index: number) => {
      const level = index < 2 ? 1 : index < 3 ? 2 : 3;
      assignTaskByLevel(userId, level, async (userTask: any) => {
        count++;
        tasksArray.push(userTask);

        currentTasks[index] = userTask.taskID;

        if (count === finalCount) {
          await updateDoc(doc(db, "Users", userId), {
            currentTasks: currentTasks,
          });

          for (let i = 0; i < tasksArray.length; i++) {
            await setDoc(
              doc(
                db,
                "Users/" + userId + "/allUserTasks/" + tasksArray[i].taskID
              ),
              tasksArray[i]
            );
          }
          localStorage.setItem(
            "TASK_ASSIGNED",
            JSON.stringify({
              timer: Date.now(),
            })
          );
          toast(currentTasks.length + " Tasks Assigned");
        }
      });
    });
  }
};

const assignTaskByLevel = async (
  userId: string,
  level: number,
  callback: (data?: any) => void
) => {
  const tasksByLevelSnapshot = await getDocs(
    query(collection(db, "Tasks"), where("level", "==", level))
  );

  if (tasksByLevelSnapshot.empty) {
    toast("No tasks found for level " + level);
    return;
  }

  const tasks: any = [];
  tasksByLevelSnapshot.forEach((item) => {
    tasks.push(item.data());
  });

  const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
  const userTasksRef = doc(collection(db, `Users/${userId}/allUserTasks`));

  // Appending more info for user reference
  const userTask = {
    created: getTimeStampLikeJava(),
    personalised: false,
    masterTaskID: randomTask.taskID,
    postID: "",
    taskID: userTasksRef.id,
  };

  callback(userTask);
};

export const getUserCurrentTasks = async (_userId: string) => {
  const data = await getDoc(doc(db, "Users/" + _userId));

  let taskArray: any = [];

  if (data.exists()) {
    taskArray = data.data().currentTasks;
  } else {
    toast("No Tasks found!");
  }

  for (let i = 0; i < taskArray.length; i++) {
    const userTaskSnapshot = await getDoc(
      doc(db, `Users/${_userId}/allUserTasks/${taskArray[i]}`)
    );

    if (userTaskSnapshot.exists()) {
      const taskSnapshot = await getDoc(
        doc(db, "Tasks", userTaskSnapshot.data()?.masterTaskID)
      );
      if (taskSnapshot.exists()) {
        taskArray[i] = {
          ...taskSnapshot.data(),
          ...userTaskSnapshot.data(),
        };
      }
    }
  }

  return taskArray;
};
