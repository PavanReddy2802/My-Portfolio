import pro1 from "../assets/project1.png";
import pro2 from "../assets/project2.png";
import pro3 from "../assets/project3.png";

const ProjectCardData = [
    {
        imgsrc: pro1,
        title: "Multi-Area Parking using Deep Learning",
        text: "Developed an AI-powered parking management system that detects vacant parking slots in multiple areas using Convolutional Neural Networks (CNN), OpenCV, and Keras. Implemented real-time image processing from CCTV footage to classify occupied and empty slots with 98% accuracy. Designed a scalable solution for smart city applications, reducing search time for parking and improving space utilization. Optimized the model for low validation loss, ensuring robust performance across diverse environments.",
        view:"link",
    },
    {
        imgsrc: pro2,
        title:"Emotion Based Music Recommendation System",
        text:"Developed a system that detects user emotions through facial expressions using computer vision and deep learning techniques, and recommends mood-specific music. Utilized OpenCV for real-time face detection and a CNN model built with Keras and TensorFlow to classify emotions such as happy, sad, or angry. Based on the predicted emotion, the system plays appropriate songs, enhancing user experience through personalized music recommendations.",
        view:"link",
    },
    {
        imgsrc: pro3,
        title:"abcdef",
        text:"hello how are you the matter should be inserted",
        view:"link",
    }
];

export default ProjectCardData;