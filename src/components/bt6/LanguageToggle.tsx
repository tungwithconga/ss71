import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleBt6 } from "../../store/reducers/Bt6Reducer";
import { RootState, AppDispatch } from "../../store/store";

export default function LanguageToggle() {
  const language = useSelector((state: RootState) => state.bt6);
  const dispatch: AppDispatch = useDispatch();

  return (
    <div className="p-4">
      <p>
        {language === "en"
          ? "Current Language: English"
          : "Ngôn ngữ hiện tại: Tiếng Việt"}
      </p>
      <select onChange={() => dispatch(toggleBt6())}>
        <option value="en">English</option>
        <option value="vi">Vietnamese</option>
      </select>
      <div className="content">
        {language === "en" ? (
          <p>Rikkei Academy</p>
        ) : (
          <p>Học Viện Rikkei</p>
        )}
      </div>
    </div>
  );
}
