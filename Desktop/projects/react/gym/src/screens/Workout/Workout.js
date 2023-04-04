import React from "react";
import '../Workout/Workout.css';
import ReactPlayer from "react-player/lazy";
const Workout = () => {
    // FOR THUMBNAILS :  https://www.freepik.com/
    // FOR VIDEOS : Youtube
    // TODO : search functionality
    const exercises = [
        {
            exerciseName: "DUMBELL CURLS",
            bodyPart: "ARMS",
            videoUrl: "https://www.youtube.com/watch?v=ykJmrZ5v0Oo&ab_channel=Howcast",
            thumbnailPic: "https://img.freepik.com/free-vector/hammer-curl-demostration_1133-371.jpg?size=626&ext=jpg&ga=GA1.1.479789805.1680506948&semt=ais"
        },
        {
            exerciseName: "PUSH UPS",
            bodyPart: "CHEST",
            videoUrl: "https://www.youtube.com/watch?v=IODxDxX7oi4&ab_channel=Calisthenicmovement",
            thumbnailPic: "https://img.freepik.com/free-vector/push-up-demostration_1133-392.jpg?size=626&ext=jpg&ga=GA1.1.479789805.1680506948&semt=ais"
        },
        {
            exerciseName: "SQUATS",
            bodyPart: "LEGS",
            videoUrl: "https://www.youtube.com/watch?v=gsNoPYwWXeM&ab_channel=Calisthenicmovement",
            thumbnailPic: "https://img.freepik.com/free-photo/sexy-fitness-woman-green-sports-clothing-with-pink-hairshe-doing-squats-young-beautiful-model-with-perfect-bodyfemale-street-near-roller-shutter-wallcheerful-happy-outdoors_158538-21611.jpg?size=626&ext=jpg&ga=GA1.1.479789805.1680506948&semt=ais"
        },
    ];

    const exerciseComponents = exercises.map((exercise) => (
        <div key={exercise.exerciseName} id="component">
            <h2 id="exerciseName">{exercise.exerciseName}</h2>
            <ReactPlayer width="15vw" height="15vw" id="videoPlayer" url={exercise.videoUrl} light={exercise.thumbnailPic} />
            <h4 id="bodyPart">MUSCLE TARGETED : {exercise.bodyPart}</h4>
        </div>
    ));

    return <div id="workoutPage">{exerciseComponents}</div>;
}

export default Workout;