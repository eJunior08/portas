import { Roles } from "./roles.config";

/* Pages */
import AssistancesPage from "../pages/AssistancesPage";
import Dashboard from "../pages/Dashboard";
import ManageDoors from "../pages/ManageDoors";
import ManageCalls from "../pages/ManageCalls";
import ManageAssignCalleds from "../pages/ManageAssignCalleds";
import CameraDoor from "../pages/CameraDoor";
import ConfirmDoor from "../pages/ConfirmDoor";
import Attendance from "../pages/Attendance";
import Params from "../pages/Params";
import Conclusion from "../pages/Conclusion";

export default [
  {
    component: Dashboard,
    path: "/dashboard",
    title: "Dashboard",
    permission: [Roles.CLIENTUSER, Roles.ORGANIZATION, Roles.TECHNICIAN],
  },
  {
    component: ManageDoors,
    path: "/manage-doors",
    title: "ManageDoors",
    permission: [Roles.CLIENTUSER],
  },
  {
    component: AssistancesPage,
    path: "/assistance-list",
    title: "AssistanceListPage",
    permission: [Roles.CLIENTUSER],
  },
  {
    component: ManageCalls,
    path: "/manage-calls",
    title: "ManageCallsPage",
    permission: [Roles.CLIENTUSER, Roles.ORGANIZATION, Roles.TECHNICIAN],
  },
  {
    component: ManageAssignCalleds,
    path: "/manage-assign-calls",
    title: "ManageCallsPage",
    permission: [Roles.TECHNICIAN],
  },
  {
    component: CameraDoor,
    path: "/camera-door",
    title: "Camera Door",
    permission: [Roles.CLIENTUSER],
  },
  {
    component: ConfirmDoor,
    path: "/confirm-door",
    title: "Confirm Door",
    permission: [Roles.CLIENTUSER],
  },
  {
    component: Attendance,
    path: "/attendance",
    title: "Attendance",
    permission: [Roles.TECHNICIAN],
  },
  {
    component: Params,
    path: "/params",
    title: "Params",
    permission: [Roles.TECHNICIAN],
  },
  {
    component: Conclusion,
    path: "/conclusion",
    title: "Conclusion",
    permission: [Roles.TECHNICIAN],
  },
];
