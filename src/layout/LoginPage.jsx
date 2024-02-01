// import React from "react";

import React from "react";

export default function LoginPage() {
    return (
      <div className="p-4">
        <div className="text-3xl">Login</div>
        <form>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Username</span>
            </div>
            <input
              type="text"
              placeholder="user name"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">password</span>
            </div>
            <input
              type="password"
              placeholder="******"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </form>
        <button className="btn btn-outline btn-info ml-3 mt-5">YES</button>
        <button className="btn btn-outline btn-info ml-3 mt-5">NO</button>
        <button className="btn btn-outline btn-info ml-3 mt-5">OK</button>
      </div>
    );
  }