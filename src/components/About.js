import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor Called");
  }

  componentDidMount() {
    console.log("Parent's componentDidMount is called!");
  }

  render() {
    return (
      <div>
        <h1>About Us</h1>
        <p>
          My name is Soumik Mitra, and I am currently pursuing a Master’s degree
          in Computer Science at the University of South Carolina Aiken, where I
          also completed my Bachelor's degree. For my undergraduate capstone
          project, I developed an Android application focused on Discrete
          Mathematics, specifically aligned with the content of MATH 174—a
          course taught by Professor Rao Li at USC Aiken. Professor Li served as
          my mentor throughout the project and collaborated with me in curating
          the PDF resources used in the app.
        </p>
        <p>
          Building on that experience, I later developed a web-based version of
          the app called Knowledge Hub, which serves as an alternative to the
          original Android-only application. By making it a web app, Knowledge
          Hub is accessible on both Android and iOS devices, significantly
          increasing its usability. This project allowed me to deepen my skills
          in technologies such as React, Material UI, Java, XML, and Google
          AdMob.{" "}
        </p>

        <UserClass
          name={"Soumik Mitra (Class)"}
          location={"Aiken, USA (Class)"}
          contact={"soumikdeb2@gmail.com (Class)"}
        />
        <UserClass
          name={"Second"}
          location={"Netherlands"}
          contact={"second@gmail.com"}
        />
        <UserClass
          name={"Third"}
          location={"Norway"}
          contact={"third@gmail.com"}
        />
        {console.log("Parent's Render is Called")}
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <p>
//         My name is Soumik Mitra, and I am currently pursuing a Master’s degree
//         in Computer Science at the University of South Carolina Aiken, where I
//         also completed my Bachelor's degree. For my undergraduate capstone
//         project, I developed an Android application focused on Discrete
//         Mathematics, specifically aligned with the content of MATH 174—a course
//         taught by Professor Rao Li at USC Aiken. Professor Li served as my
//         mentor throughout the project and collaborated with me in curating the
//         PDF resources used in the app.
//       </p>
//       <p>
//         Building on that experience, I later developed a web-based version of
//         the app called Knowledge Hub, which serves as an alternative to the
//         original Android-only application. By making it a web app, Knowledge Hub
//         is accessible on both Android and iOS devices, significantly increasing
//         its usability. This project allowed me to deepen my skills in
//         technologies such as React, Material UI, Java, XML, and Google AdMob.{" "}
//       </p>

//       <UserClass
//         name={"Soumik Mitra (Class)"}
//         location={"Aiken, USA (Class)"}
//         contact={"soumikdeb2@gmail.com (Class)"}
//       />
//     </div>
//   );
// };

export default About;
