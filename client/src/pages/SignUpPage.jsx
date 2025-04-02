import { Link } from "react-router-dom";

export default function SignUpPage() {
  return (
    <div className="sign-up-container">
      <div className="sign-up-form">
        <h1>Sign Up</h1>
        <div className="sign-up-inputs">
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
        </div>
        <button className="sign-up-btn">Sign Up</button>
        <h2>OTHER</h2>

        <div className="SVG-container">
          <svg
            className="google-svg"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            width="2rem"
            height="2rem"
          >
            <path
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m31.6814,34.8868c-1.9155,1.29-4.3586,2.0718-7.2514,2.0718-5.59,0-10.3395-3.7723-12.04-8.8541v-.0195c-.43-1.29-.6841-2.6582-.6841-4.085s.2541-2.795.6841-4.085c1.7005-5.0818,6.45-8.8541,12.04-8.8541,3.1664,0,5.9809,1.0945,8.2286,3.2055l6.1568-6.1568c-3.7332-3.4791-8.5805-5.6095-14.3855-5.6095-8.4045,0-15.6559,4.8277-19.1936,11.8641-1.4659,2.8927-2.3064,6.1568-2.3064,9.6359s.8405,6.7432,2.3064,9.6359v.0195c3.5377,7.0168,10.7891,11.8445,19.1936,11.8445,5.805,0,10.6718-1.9155,14.2291-5.1991,4.0655-3.7527,6.4109-9.2645,6.4109-15.8123,0-1.5245-.1368-2.9905-.3909-4.3977h-20.2491v8.3264h11.5709c-.5082,2.6777-2.0327,4.945-4.3195,6.4695h0Z"
            ></path>
          </svg>

          <svg
            className="facebook-svg"
            viewBox="0 0 1920 1920"
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            width="2rem"
            height="2rem"
          >
            <path
              fill="black"
              stroke="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m1416.013 791.915-30.91 225.617h-371.252v789.66H788.234v-789.66H449.808V791.915h338.426V585.137c0-286.871 176.207-472.329 449.09-472.329 116.87 0 189.744 6.205 231.822 11.845l-3.272 213.66-173.5.338c-4.737-.451-117.771-9.25-199.332 65.655-52.568 48.169-79.191 117.433-79.191 205.65v181.96h402.162Zm-247.276-304.018c44.446-41.401 113.71-36.889 118.787-36.663l289.467-.113 6.204-417.504-43.544-10.717C1511.675 16.02 1426.053 0 1237.324 0 901.268 0 675.425 235.206 675.425 585.137v93.97H337v451.234h338.425V1920h451.234v-789.66h356.7l61.932-451.233H1126.66v-69.152c0-54.937 14.214-96 42.078-122.058Z"
            ></path>
          </svg>

          <svg
            className="apple-svg"
            viewBox="-145 129 220 256"
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            width="2rem"
            height="2rem"
          >
            <path
              d="M75,316.8c-6,13.3-8.9,19.3-16.6,31c-10.8,16.4-26,36.9-44.9,37.1c-16.8,0.2-21.1-10.9-43.8-10.8 
  c-22.7,0.1-27.5,11-44.3,10.8c-18.9-0.2-33.3-18.7-44.1-35.1c-30.2-46-33.4-99.9-14.7-128.6c13.2-20.4,34.1-32.3,53.8-32.3 
  c20,0,32.5,11,49.1,11c16,0,25.8-11,48.9-11c17.5,0,36,9.5,49.2,26C24.3,238.6,31.3,300.3,75,316.8L75,316.8z 
  M0.8,170.6c8.4-10.8,14.8-26,12.5-41.6c-13.7,0.9-29.8,9.7-39.1,21.1c-8.5,10.3-15.5,25.6-12.8,40.5C-23.7,191.1-8.2,182.1,0.8,170.6 L0.8,170.6z"
            ></path>
          </svg>
        </div>
      </div>

      <div className="welcome">
        <h1>WELCOME</h1>
        <h2>
          ENTER YOUR DETAILS AND EMBARK ON YOUR CINEMATIC JOURNEY WITH US.
        </h2>
        <Link to="/sign-in">LOG IN</Link>
      </div>
      <div className="Home-btn">
        <Link to="/" className="home-link">
          Home
        </Link>
      </div>
    </div>
  );
}
