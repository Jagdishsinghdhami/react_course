import { useState } from "react";

const CheckBox = () => {
  const [status, setStatus] = useState({
    check1: false,
    check2: false,
    check3: false,
    check4: false,
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
    <div>
      <h1>Checkbox questions</h1>
      <div>
        <input
          type="checkbox"
          id="all"
          checked={
            status.check1 && status.check2 && status.check3 && status.check4
          }
          onChange={handleAllBoxChange}
        />
        <label htmlFor="all">All Box</label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={status.check1}
          onChange={() => setStatus({ ...status, check1: !status.check1 })}
          id="box1"
        />
        <label htmlFor="box1">Box 1</label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={status.check2}
          onChange={() => setStatus({ ...status, check2: !status.check2 })}
          id="box2"
        />
        <label htmlFor="box2">Box 2</label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={status.check3}
          onChange={() => setStatus({ ...status, check3: !status.check3 })}
          id="box3"
        />
        <label htmlFor="box3">Box 3</label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={status.check4}
          onChange={() => setStatus({ ...status, check4: !status.check4 })}
          id="box4"
        />
        <label htmlFor="box4">Box 4</label>
      </div>
    </div>
  );
};

export default CheckBox;
