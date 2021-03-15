import "./App.css";
import Header from "./header/Header";
import Footer from "./header/Footer";
import pups from "./puppers.jpeg";
import CommentsContainer from "./comments/CommentsContainer";
import { useState } from "react";
function App() {
  const [landscape, toggleLandscape] = useState(false);
  return (
    <>
      <div className="container">
        {!landscape && (
          <div className="vert">
            <div className="item">
              <Header></Header>
            </div>
            <div className="item">
              <img src={pups} alt="pups" class="mx-auto" width="100%" />
            </div>
            <div className="item">
              <Footer></Footer>
            </div>
            <div className="item">
              <div className="row" style={{ height: "auto" }}>
                <div className="end-item">
                  <strong>100 likes</strong>
                </div>
                <div className="user-item"></div>
                <div className="end-item"></div>
              </div>
            </div>
            <div
              className="item"
              style={{ height: "250px", overflowY: "auto" }}
            >
              <CommentsContainer></CommentsContainer>
            </div>
          </div>
        )}

        {landscape && (
          <div className="horiz">
            <div className="item">
              <img src={pups} alt="pups" class="mx-auto" width="100%" />
            </div>

            <div className="item" style={{ width: "100%" }}>
              <Header></Header>
              <div style={{ backgroundColor: "rgba(220, 220, 220, 0.5)" }}>
                <hr style={{ padding: "0px", margin: "0px" }} />
              </div>

              <Footer></Footer>
              <div className="row" style={{ height: "auto" }}>
                <div className="end-item">
                  <strong>100 likes</strong>
                </div>
                <div className="user-item"></div>
                <div className="end-item"></div>
              </div>
              <div style={{ height: "300px", overflowY: "auto" }}>
                <CommentsContainer></CommentsContainer>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="button-row" style={{ padding: "10px" }}>
        <div className="end-item"></div>
        <button
          className="end-item"
          onClick={() => {
            toggleLandscape(!landscape);
          }}
        >
          Switch mode
        </button>
        <div className="end-item"></div>
      </div>
    </>
  );
}

export default App;
