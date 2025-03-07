import { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";

function MyProfile() {
  const [userData, setUserData] = useState({
    name: "Ahmed",
    image: assets.profile_pic,
    email: "examle@gmail.com",
    phone: "01279281753",
    address: {
      line1: "egypt",
      line2: "Cairo",
    },
    gender: "Male",
    dob: "2000-01-20",
  });
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img className="w-36 rounded" src={userData.image} alt="" />
      {isEdit ? (
        <input
          className="bg-gray-50 text-3xl font-medium max-w-60mt-4"
          type="text"
          value={userData.name}
          onChange={(e) => setUserData((prev) => ({ ...prev, name: e.target.value }))}
        />
      ) : (
        <p className="font-medium text-3xl text-neutral-800 mt-4">{userData.name}</p>
      )}
      <hr className="bg-zinc-400 h-[1px] border-none" />
      <div>
        <p className="text-neutral-500 mt-3 underline">Contact Information</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Email id:</p>
          <p className="text-blue-500">{userData.email}</p>
          <p className="font-medium">phone:</p>
          {isEdit ? (
            <input
              className="max-w-52 bg-gray-100"
              type="text"
              onChange={(e) => setUserData((prev) => ({ ...prev, name: e.target.value }))}
            />
          ) : (
            <p className="text-blue-400">{userData.phone}</p>
          )}
          <p className="font-medium">Address:</p>
          {isEdit ? (
            <p>
              <input
                className="bg-gray-50"
                onChange={(e) => {
                  setUserData((prev) => {
                    return { ...prev, address: { ...prev.address, line1: e.target.value } };
                  });
                }}
                value={userData.address.line1}
                type="text"
              />
              <br />
              <input
                className="bg-gray-50"
                onChange={(e) => {
                  setUserData((prev) => {
                    return { ...prev, address: { ...prev.address, line2: e.target.value } };
                  });
                }}
                type="text"
                value={userData.address.line2}
              />
            </p>
          ) : (
            <p className="text-gray-500">
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>
      <div>
        <p className="text-neutral-500 mt-3 underline">Basic Information</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Gender:</p>
          {isEdit ? (
            <select
              className="max-w-20 bg-gray-100"
              onChange={(e) => {
                setUserData((prev) => {
                  return { ...prev, gender: e.target.value };
                });
              }}
            >
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
          ) : (
            <p className="text-gray-400">{userData.gender}</p>
          )}

          <p className="font-medium">BirthDay:</p>
          {isEdit ? (
            <input
              type="date"
              className="max-w-20 bg-gray-100"
              onChange={(e) => {
                setUserData((prev) => {
                  return { ...prev, dob: e.target.value };
                });
              }}
              value={userData.dob}
            />
          ) : (
            <p className="text-gray-400">{userData.dob}</p>
          )}
        </div>
      </div>
      <div className="mt-10">
        {isEdit ? (
          <button
            className="border border-primary px-8 py-2 rounded-full hover:bg-primary transition-all "
            onClick={() => {
              setIsEdit(false);
            }}
          >
            Save Information
          </button>
        ) : (
          <button
            className="border border-primary px-8 py-2 rounded-full hover:bg-primary transition-all "
            onClick={() => {
              setIsEdit(true);
            }}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
}

export default MyProfile;
