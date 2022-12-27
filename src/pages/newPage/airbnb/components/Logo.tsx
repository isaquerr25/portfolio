import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { pink } from "@mui/material/colors";
import { FaAirbnb } from "react-icons/fa";
import { flexCenter } from "../themes/commonStyles";

export default function Logo() {
	return (
		<Box sx={flexCenter}>
			<FaAirbnb size={40} color={pink[500]} />
			<text className=" ml-[1rem] text-[20px] font-[800]">airBnB</text>
		</Box>
	);
}
