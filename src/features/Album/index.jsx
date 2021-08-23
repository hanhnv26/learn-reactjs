import React from "react";
import PropTypes from "prop-types";
import AlbumList from "../Album/components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "R & B",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/f/d/e/a/fdea9e520c65931373a87f8d92a92f81.jpg",
    },
    {
      id: 2,
      name: "US UK",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/6/8/b/1/68b11e8742237a793e1d7b44a16f8e0a.jpg",
    },
    {
      id: 3,
      name: "Dinh Cao",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/7/8/b/2/78b22480cf28ed30f579d48863e8fbd3.jpg",
    },
  ];

  return (
    <div>
      <h2>Có thể bạn sẽ thích đấy</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
