import React from "react";
import Middleware from "@/utiles/Middleware";
const token = (req, res) => {
  
    try {
        return res.status(200).json({ message: "送信成功", name: req.body.name });
    } catch (error) {
        return res.status(400).json({ message: "送信失敗" });
    }
};

export default Middleware(token);
