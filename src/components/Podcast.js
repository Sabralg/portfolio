import React from "react";

const Podcast = () => { 
    return (
         <section id="podcast">
            <h2>Mon Podcast</h2>
            <p>Découvrez le podcast où je parle du jeu vidéo.</p>
            {/* Intégration YouTube */}
            <div style={
                {
                    position: "relative",
                    paddingBottom: "56.25%",
                    height: 0,
                    overflow: "hidden",
                    maxWidth: "100%",
                    background: "#000" }}>
                        <iframe src="https://www.youtube.com/embed/MNkKboWhlaI" title="Podcast" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} >
                        </iframe>
            </div>
        </section>
    );
};

export default Podcast;