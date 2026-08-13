import { load } from "@2gis/mapgl";
import { MapWrapper } from "./MapWrapper";
import { useEffect } from "react";

const apiKEY = import.meta.env.VITE_API_KEY;
console.log(import.meta.env);

export const Map = () => {
  useEffect(() => {
    let map: any;
    load().then((mapglAPI) => {
      map = new mapglAPI.Map("map-container", {
        center: [37.615655, 55.768005],
        zoom: 13,
        key: apiKEY,
      });
    });

    // Удаляем карту при размонтировании компонента
    return () => map && map.destroy();
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <MapWrapper />
    </div>
  );
};
