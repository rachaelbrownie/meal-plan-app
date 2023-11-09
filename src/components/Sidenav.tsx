import { useState, useCallback } from "react";
import {
  DashboardIcon,
  OrganizationIcon,
  UserIcon,
  SettingsIcon,
  ContainerIcon,
  NodeIcon,
  NamespaceIcon,
} from "@mirantis/mds-icon";
import { Tag } from "@mirantis/mds-tag";
import { Sidenav as MdsSidenav } from "@mirantis/mds-sidenav";

import { Link } from "react-router-dom";
import { useNavigate, useMatch, useMatches } from "react-router-dom";
const Sidenav = function () {
  const navigate = useNavigate();
  const match = useMatch("page/:pageId");
  const matches = useMatches();
  console.log(matches);
  const handleItemSelect = useCallback(function (
    event,
    {
      item,
    }: {
      item: Record<string, any>;
      group?: Record<string, any> | undefined;
    },
  ) {
    navigate(`page/${item.value}`);
  }, []);

  return (
    <MdsSidenav
      id="mds-sidenav-example-registry"
      items={[
        {
          label: "Dashboard",
          value: "dashboard",
          Icon: DashboardIcon,
        },
        {
          label: "Organizations",
          value: "organizations",
          Icon: OrganizationIcon,
        },
        {
          label: "Users",
          value: "users",
          Icon: UserIcon,
        },
        {
          label: "Containers",
          value: "containers",
          Icon: ContainerIcon,
        },
        {
          label: "Nodes",
          value: "nodes",
          Icon: NodeIcon,
        },
        {
          label: "Namespaces",
          value: "namespaces",
          Icon: NamespaceIcon,
        },
        {
          label: "Service Accounts",
          value: "serviceAccounts",
          Icon: SettingsIcon,
        },
      ]}
      value={match.params.pageId} // selected level 1 item
      onItemSelect={handleItemSelect}
    />
  );
};

export { Sidenav };
