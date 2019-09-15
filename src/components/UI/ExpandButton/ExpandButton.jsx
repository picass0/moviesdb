import React from 'react';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';

function ExpandButton({
  // eslint-disable-next-line react/prop-types
  expanded, className, clicked,
}) {
  const icon = expanded ? <ExpandLess /> : <ExpandMore />;
  return (
    <IconButton
      edge="start"
      color="inherit"
      aria-label="Menu"
      className={className}
      onClick={clicked}
    >
      {icon}
    </IconButton>
  );
}

export default ExpandButton;
