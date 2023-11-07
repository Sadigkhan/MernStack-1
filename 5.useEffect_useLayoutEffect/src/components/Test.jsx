import React, { useEffect } from "react";

export default function Test() {
  useEffect(() => {
    console.log("Test component render olundu");
    return () => {
      console.log("Test component destroy oldu");
    };
  }, []);

  return <div>Test</div>;
}
