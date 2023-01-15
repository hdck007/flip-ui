import { useState } from "react";
import images from "../utils/data";

export default function Captcha({ onChange }) {
  const [clicked, setClicked] = useState(false);
  const [imageData, setImageData] = useState(() => {
    return images.map((image) => ({
      ...image,
      selected: false,
    }));
  });
  const [checked, setChecked] = useState(false);

  const handleCheckBoxClick = (e) => {
    e.preventDefault();
    if (checked) {
      setChecked(false);
    } else {
      setClicked(true);
    }
  };

  const handleClose = (e) => {
    setClicked(false);
  };

  const handleClick = (event) => {
    let valid = true;
    imageData.forEach((image) => {
      if (image.selected && image.value !== "boat") {
        valid = false;
      }
    });
    if (valid) {
      onChange(true);
      setChecked(true);
      setClicked(false);
      setImageData(
        images.map((image) => ({
          ...image,
          selected: false,
        }))
      );
    } else {
      setChecked(false);
      setClicked(false);
      onChange(false);
      setImageData(
        images.map((image) => ({
          ...image,
          selected: false,
        }))
      );
    }
  };

  const handleSelect = (index) => {
    const newImageData = imageData.map((image, i) => {
      if (i === index) {
        return {
          ...image,
          selected: !image.selected,
        };
      }
      return image;
    });
    setImageData(newImageData);
  };

  const handleChange = (e) => {
    onChange(e.target.checked);
  };

  return (
    <div className="relative">
      <div className="text-xl px-4 dark:text-white">
        <input
          type="checkbox"
          className="accent-green-500 checked:text-white text-white h-5 w-5"
          checked={checked}
          onChange={handleChange}
          onClick={handleCheckBoxClick}
        />
        &nbsp; I am a human
      </div>
      {clicked && (
        <div className="absolute z-50 h-96  sm:h-[430px] -left-[5%] w-[350px] top-full mb-5 sm:w-96 shadow p-4 bg-slate-50 dark:bg-slate-800">
          <div className="flex justify-end items-center w-10 float-right">
            <button onClick={handleClose} className="cursor-pointers dark:text-white font-bold">
              X
            </button>
          </div>
          <div className="dark:text-white" >Select images with boat on it.</div>
          <div className=" mt-4 w-full flex flex-wrap justify-around items-center gap-2">
            {imageData.map((image, index) => (
              <img
                key={index + "captcha-image"}
                onClick={() => handleSelect(index)}
                className={`w-[90px]  sm:w-[110px] h-20 sm:h-24 border-4 transition-all ease-in-out ${
                  image?.selected ? "border-red-500" : "border-white dark:border-slate-800"
                }`}
                src={image.src}
                alt={image.value}
              />
            ))}
          </div>
          <div className="flex justify-end itmes-center">
            <button
              onClick={handleClick}
              className="py-2 my-4 mx-1 px-6 rounded-full bg-red-500 text-white"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
