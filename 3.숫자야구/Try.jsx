import React, { memo, PureComponent } from "react";

const Try = memo(({ tryInfo }) => {
  return (
    <li>
      <b>{tryInfo.try}</b> - {tryInfo.result}
    </li>
  );
});
Try.displayName = 'Try';

export default Try;
