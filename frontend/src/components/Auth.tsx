import { Link, useNavigate } from "react-router-dom";
import LabelledInput from "./LabelledInput";
import { useState } from "react";
import { UserSignin } from "@shivanandasai/common";
import Button from "./Button";
import axios from "axios";
import { BACKEND_URL } from "../helper/config";

export const Auth = ({ type }: { type: "signin" | "signup" }) => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<UserSignin>({
    email: "",
    password: "",
  });

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        postInputs
      );
      const jwt = response.data.token;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (e) {
      console.error("ERR:", e);
    }
  }

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div className="px-10">
            <div className="text-3xl font-extrabold">Create an account</div>
            <div className="text-slate-500 text-center">
              {type === "signin"
                ? "Don't have an account? "
                : "Already have an account? "}
              <Link
                className="underline"
                to={type === "signin" ? "/signup" : "/signin"}
              >
                {type === "signin" ? "Sign up" : "Sign in"}
              </Link>
            </div>
          </div>
          <div className="pt-5">
            {type === "signup" ? (
              <LabelledInput
                label="Name"
                placeholder="Enter Name"
                onChange={(e) => {
                  setPostInputs((c) => ({
                    ...c,
                    name: e.target.value,
                  }));
                }}
              />
            ) : null}
            <LabelledInput
              label="Email"
              placeholder="Enter Email"
              onChange={(e) => {
                setPostInputs((c) => ({
                  ...c,
                  email: e.target.value,
                }));
              }}
            />
            <LabelledInput
              label="Password"
              type="password"
              placeholder="Enter Password"
              onChange={(e) => {
                setPostInputs((c) => ({
                  ...c,
                  password: e.target.value,
                }));
              }}
            />
          </div>
          <Button onClick={sendRequest} type={type} />
        </div>
      </div>
    </div>
  );
};

export default Auth;
