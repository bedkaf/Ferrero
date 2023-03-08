import React, { useState, useEffect } from "react";
import { Button, Icon, Checkbox } from "semantic-ui-react";
import { map } from "lodash";
import { TableAdmin } from "../";
import "./TablesListAdmin.scss";
import { TIME_RELOAD } from "../../../../utils/constants";

export function TablesListAdmin(props) {
  const { tables } = props;
  const [reload, setReload] = useState(false);
  const [autoReload, setAutoReload] = useState(false);

  const onReload = () => setReload((prev) => !prev);

  useEffect(() => {
    if (autoReload) {
      const autoReloadAction = () => {
        onReload();
        setTimeout(() => {
          autoReloadAction();
        }, TIME_RELOAD);
      };
      autoReloadAction();
    }
  }, [autoReload]);

  const onCheckAutoReload = (check) => {
    if (check) {
      setAutoReload(check);
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="main">
      <div className="tables-list-admin">
        <Button
          primary
          icon
          className="tables-list-admin__reaload"
          onClick={onReload}
        >
          <Icon name="refresh" />
        </Button>

        <div className="tables-list-admin__reaload-toggle">
          <div className="tables-list-admin__reaload-toggle__automatic">{`Actualizacion automatica `}</div>
          <Checkbox
            toggle
            checked={autoReload}
            onChange={(_, data) => onCheckAutoReload(data.checked)}
          />
        </div>

        {map(tables, (table) => (
          <TableAdmin key={table.number} table={table} reload={reload} />
        ))}
      </div>
    </div>
  );
}
