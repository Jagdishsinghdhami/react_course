import { useState } from "react";

const Practice1 = () => {
  const [status, setStatus] = useState({
    check1: false,
    check2: false,
    check3: false,
  });

  const handleAllBoxChange = () => {
    const allChecked = !status.check1 || !status.check2 || !status.check3;
    setStatus({
      check1: allChecked,
      check2: allChecked,
      check3: allChecked,
    });
  };

  return (
    <>
      <h1>React Practice Questions 1 : </h1>
      <div>
        <div>
          <input
            type="checkbox"
            id="allBox"
            checked={status.check1 && status.check2 && status.check3}
            onChange={handleAllBoxChange}
          />{" "}
          <label htmlFor="allBox">All Box</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="Box1"
            checked={status.check1}
            onChange={() => setStatus({ ...status, check1: !status.check1 })}
          />{" "}
          <label htmlFor="Box1">Box 1</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="Box2"
            checked={status.check2}
            onChange={() => setStatus({ ...status, check2: !status.check2 })}
          />{" "}
          <label htmlFor="Box2">Box 2</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="Box3"
            checked={status.check3}
            onChange={() => setStatus({ ...status, check3: !status.check3 })}
          />{" "}
          <label htmlFor="Box3">Box 3</label>
        </div>
      </div>
    </>
  );
};

export default Practice1;
