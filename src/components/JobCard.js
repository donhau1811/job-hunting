import * as React from "react";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import Chip from "@mui/material/Chip";
import { Link } from "react-router-dom";

export default function JobCard({ job }) {
  const CardActions = styled("div")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  return (
    <Card sx={{ backgroundColor: "#757575" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" noWrap>
          {job.title}
        </Typography>
        <Typography color="text.secondary">
          {job.description.length > 70
            ? `${job.description.slice(0, 70)}...`
            : job.description}
        </Typography>
        {job.skills.slice(0, 4).map((skill) => (
          <Chip sx={{ backgroundColor: "#ef5350" }} label={skill} />
        ))}
      </CardContent>
      <CardActions>
        <Link
          to={`/jobs/${job.id}`}
          style={{
            textAlign: "center",
            margin: "auto",
            textDecoration: "none",
          }}
        >
          <Button
            sx={{ backgroundColor: "#f57c00", color: "black" }}
            size="small"
          >
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
