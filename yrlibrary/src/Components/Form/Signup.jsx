import React, { useState } from "react";
import { account} from "../apprwriteconfig.js";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleRegistration = async (e) => {
        e.preventDefault();

        const { name, email, password, username } = formData;

        if (!name || !email || !password || !username) {
            setError("Please fill in all the fields.");
            return;
        }
        

        setLoading(true);
        setError(null);

        try {
            const randomString = Math.random().toString(36).substring(2, 15);

            const userId = `${username.replace(/[^a-zA-Z0-9.-_]/g, "").toLowerCase()}_${randomString}`
            await account.create(userId, email, password, username, name);
            navigate("/");
        } catch (err) {
            setError(err.message || "Failed to create account. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="grid grid-cols-2 gap-8">
            <div>
                <img
                    src="../img/bkgrd.png"
                    alt="Background"
                    style={{ height: 650, width: 500 }}
                />
            </div>
            <div className="text-start">
                <h1 className="text-3xl pt-12">Signup to yourLIBRARY</h1>
                <form onSubmit={handleRegistration}>
                    <br />
                    <label>Name</label>
                    <br />
                    <input
                        required
                        type="text"
                        name="name"
                        className="border border-slate-500 rounded-md text-sm p-2"
                        style={{ width: 350, backgroundColor: "#F7FAFC" }}
                        onChange={handleChange}
                        placeholder="yourname"
                    />
                    <br />
                    <label>Username</label>
                    <br />
                    <input
                        required
                        type="text"
                        name="username"
                        className="border border-slate-500 rounded-md text-sm p-2"
                        style={{ width: 350, backgroundColor: "#F7FAFC" }}
                        onChange={handleChange}
                        placeholder="user1"
                    />
                    <br />
                    <label>Email</label>
                    <br />
                    <input
                        required
                        type="email"
                        name="email"
                        placeholder="example@gmail.com"
                        className="border border-slate-500 rounded-md text-sm p-2"
                        onChange={handleChange}
                        style={{ width: 350, backgroundColor: "#F7FAFC" }}
                    />
                    <br />
                    <label>Password</label>
                    <br />
                    <input
                        required
                        type="password"
                        name="password"
                        placeholder="password"
                        className="border border-slate-500 rounded-md text-sm p-2"
                        onChange={handleChange}
                        style={{ width: 350, backgroundColor: "#F7FAFC" }}
                    />
                    <br />
                    <br />
                    <p style={{ width: 340 }} className="text-sm">
                        <input required type="checkbox" /> I agree with YourLibrary Terms of
                        Service, Privacy Policy, and default Notification Settings.
                    </p>
                    <br />
                    <button
                        type="submit"
                        className="p-2 rounded-lg"
                        style={{ width: 350, backgroundColor: "#E1651F", cursor: 'pointer' }}
                        disabled={loading}
                    >
                        {loading ? "Creating Account..." : "Create Account"}
                    </button>
                    {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
                </form>
                <p className="text-base" style={{ paddingTop: 4 }}>
                    Already have an account?
                    <Link to="/login" style={{ color: "darkblue" }}>
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Signup;


