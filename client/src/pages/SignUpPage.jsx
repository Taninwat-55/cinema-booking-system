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
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
          >
            <path
              fill="black"
              stroke="none"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M57.57,28.19 C58.30,27.35 58.79,26.17 58.66,25 C57.61,25.04 56.34,25.67 55.58,26.51 C54.91,27.26 54.31,28.46 54.47,29.61 C55.65,29.70 56.84,29.04 57.57,28.19 M60.20,36.62 C60.23,39.65 62.97,40.66 63,40.67 C62.98,40.74 62.56,42.11 61.56,43.52 C60.69,44.73 59.78,45.95 58.36,45.97 C56.96,46.00 56.51,45.18 54.91,45.18 C53.32,45.18 52.82,45.95 51.49,46.00 C50.12,46.05 49.07,44.68 48.20,43.47 C46.40,40.98 45.03,36.45 46.87,33.39 C47.79,31.87 49.42,30.91 51.19,30.88 C52.54,30.86 53.82,31.75 54.64,31.75 C55.46,31.75 57.01,30.68 58.64,30.84 C59.32,30.86 61.23,31.10 62.45,32.82 C62.36,32.88 60.17,34.09 60.20,36.62"
            />
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
    </div>
  );
}
