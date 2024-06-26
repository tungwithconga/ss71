import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { User, toggleUserStatus } from "../../store/reducers/Bt7Reducer";
import { HeartOutlined } from "@ant-design/icons";

export default function Bt7() {
  const userList = useSelector((state: RootState) => state.bt7);
  const dispatch: AppDispatch = useDispatch();

  return (
    <div>
      <div>
        {userList.map((item: User, index: number) => (
          <div className="flex-col gap-5" key={index}>
            <div>UserName: {item.name}</div>
            <div>
              Favorites:{" "}
              <HeartOutlined
                style={{ color:
                  item.status ? "red" : "black"
                }}
                onClick={() => dispatch(toggleUserStatus(index))}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
