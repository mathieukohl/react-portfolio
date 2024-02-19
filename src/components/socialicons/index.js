import React from "react";
import "./style.css";
import {
  FaYoutube,
} from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.fiverr && (
          <li>
            <a href={socialprofils.fiverr}>
              <SiFiverr />
            </a>
          </li>
        )}
        {socialprofils.youtube && (
          <li>
            <a href={socialprofils.youtube}>
              <FaYoutube />
            </a>
          </li>
        )}
        {socialprofils.behance && (
          <li>
            <a href={socialprofils.behance}>
              <h6 style={{ fontSize: "0.5rem" }}>Behance</h6>
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
