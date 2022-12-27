import { Box, Grid } from "@mui/material";

import React, { useState } from "react";
import CarouselCard from "./CarouselCard";
import { locations } from "../data/mock-data";

const LocationCards = () => {
	const [cards] = useState(locations);

	if (!cards.length) {
		return null;
	}

	return (
		<Box sx={{ mx: 2 }}>
			<Grid container rowSpacing={3} columnSpacing={3}>
				{cards.map((location: any) => {
					return (
						<Grid
							key={location.id}
							item
							xs={12}
							sm={2}
							md={4}
							lg={3}
						>
							<CarouselCard location={location} />
						</Grid>
					);
				})}
			</Grid>
		</Box>
	);
};

export default LocationCards;
