import React from "react";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SwipeableViews from "react-swipeable-views";
// mui icons

// react icons
import { AiFillStar } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";

import "./CarouselCard.css";
import {
	carouselDot,
	carouselImage,
	dFlex,
	fixedBottom,
	fixedIcon,
	flexBetween,
} from "../themes/commonStyles";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const CarouselCard = ({ location }: { location: any }) => {
	const [activeStep, setActiveStep] = React.useState(0);

	const maxSteps = location.locationImages.length; // so that we know how many dots

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1); // jumps when we click the next arrow
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1); // when we click the back arrow
	};

	const handleStepChange = (step: any) => {
		setActiveStep(step); // handle swipe change
	};
	return (
		<Box
			className="carouselCard"
			sx={{
				flexGrow: 1,
				position: "relative",
			}}
		>
			<Box sx={fixedIcon}>
				<FaRegHeart size={24} color="#fff" />
			</Box>

			{location.locationImages.length && (
				<SwipeableViews
					axis={"x"}
					index={activeStep}
					onChangeIndex={handleStepChange}
					enableMouseEvents
				>
					{location.locationImages.map((step: any, index: any) => {
						return (
							<div key={step.id}>
								<Box
									component="img"
									sx={carouselImage}
									src={step.url}
									alt={step.id}
								></Box>
							</div>
						);
					})}
				</SwipeableViews>
			)}

			<Box sx={fixedBottom}>
				<MobileStepper
					sx={{ backgroundColor: "transparent" }}
					steps={maxSteps}
					position="static"
					activeStep={activeStep}
					nextButton={
						<Button
							size="small"
							sx={carouselDot}
							onClick={handleNext}
							disabled={activeStep === maxSteps - 1}
						>
							<MdKeyboardArrowRight />
						</Button>
					}
					backButton={
						<Button
							size="small"
							sx={carouselDot}
							onClick={handleBack}
							disabled={activeStep === 0}
						>
							<MdKeyboardArrowLeft />
						</Button>
					}
				/>
			</Box>

			<Box sx={flexBetween}>
				<Box sx={{ mt: 2 }}>
					<Typography component="h3"> {location.location}</Typography>
					<Typography component="h4"> {location.days}</Typography>
					<Typography component="h5"> {location.price}</Typography>
				</Box>
				<Box sx={{ mt: 2 }}>
					<Box sx={dFlex}>
						{location.isNew ? (
							<React.Fragment>
								<Typography component="h5">New</Typography>
								<AiFillStar size={18} />
							</React.Fragment>
						) : (
							<React.Fragment>
								<Typography component="h5">
									{" "}
									{location.rating}
								</Typography>
								<AiFillStar size={18} />
							</React.Fragment>
						)}
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default CarouselCard;
