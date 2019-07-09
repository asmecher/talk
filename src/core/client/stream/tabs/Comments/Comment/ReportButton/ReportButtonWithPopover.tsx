import React from "react";

import { ClickOutside, Popover } from "coral-ui/components";
import { Localized } from "fluent-react/compat";

import ReportPopover from "../ReportPopover";
import ReportButton from "./ReportButton";

import { PropTypesOf } from "coral-ui/types";

interface Props {
  comment: { id: string } & PropTypesOf<typeof ReportPopover>["comment"];
  reported: boolean;
}

const ReportButtonWithPopover: React.FunctionComponent<Props> = ({
  comment,
  reported,
}) => {
  const popoverID = `report-popover-${comment.id}`;
  return (
    <Localized id="comments-reportPopover" attrs={{ description: true }}>
      <Popover
        id={popoverID}
        placement="top-end"
        description="A dialog for reporting comments"
        body={({ toggleVisibility, scheduleUpdate }) => (
          <ClickOutside onClickOutside={toggleVisibility}>
            <ReportPopover
              comment={comment}
              onClose={toggleVisibility}
              onResize={scheduleUpdate}
            />
          </ClickOutside>
        )}
      >
        {({ toggleVisibility, ref, visible }) => (
          <ReportButton
            onClick={evt => !reported && toggleVisibility(evt)}
            aria-controls={popoverID}
            ref={ref}
            active={visible}
            reported={reported}
          />
        )}
      </Popover>
    </Localized>
  );
};

export default ReportButtonWithPopover;