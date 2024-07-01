import { Card, styled } from "@mui/material";

export const  CardWrapper = styled(Card)(( {theme,cardWidth,bgColor} ) => ({
    width: cardWidth ? cardWidth : 200,
    backgroundColor: bgColor ? bgColor: "#667BC6",
    borderRadius: 10,
    padding: 10,
    color: "#fff",
  }));