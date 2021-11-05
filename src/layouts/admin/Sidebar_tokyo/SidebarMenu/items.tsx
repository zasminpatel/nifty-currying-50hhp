import type { ReactNode } from "react";

import AnalyticsTwoToneIcon from "@mui/icons-material/AnalyticsTwoTone";
import AccountBalanceTwoToneIcon from "@mui/icons-material/AccountBalanceTwoTone";
import StoreTwoToneIcon from "@mui/icons-material/StoreTwoTone";
import AccountBalanceWalletTwoToneIcon from "@mui/icons-material/AccountBalanceWalletTwoTone";
import MonetizationOnTwoToneIcon from "@mui/icons-material/MonetizationOnTwoTone";
import KitchenTwoToneIcon from "@mui/icons-material/KitchenTwoTone";
import HealthAndSafetyTwoToneIcon from "@mui/icons-material/HealthAndSafetyTwoTone";
import ContactSupportTwoToneIcon from "@mui/icons-material/ContactSupportTwoTone";
import LocalLibraryTwoToneIcon from "@mui/icons-material/LocalLibraryTwoTone";
import DnsTwoToneIcon from "@mui/icons-material/DnsTwoTone";
import TaskAltTwoToneIcon from "@mui/icons-material/TaskAltTwoTone";
import EventNoteTwoToneIcon from "@mui/icons-material/EventNoteTwoTone";
import DocumentScannerTwoToneIcon from "@mui/icons-material/DocumentScannerTwoTone";
import WorkTwoToneIcon from "@mui/icons-material/WorkTwoTone";
import MarkunreadMailboxTwoToneIcon from "@mui/icons-material/MarkunreadMailboxTwoTone";
import QuestionAnswerTwoToneIcon from "@mui/icons-material/QuestionAnswerTwoTone";
import DashboardCustomizeTwoToneIcon from "@mui/icons-material/DashboardCustomizeTwoTone";
import AssignmentIndTwoToneIcon from "@mui/icons-material/AssignmentIndTwoTone";
import AccountTreeTwoToneIcon from "@mui/icons-material/AccountTreeTwoTone";
import StorefrontTwoToneIcon from "@mui/icons-material/StorefrontTwoTone";
import VpnKeyTwoToneIcon from "@mui/icons-material/VpnKeyTwoTone";
import ErrorTwoToneIcon from "@mui/icons-material/ErrorTwoTone";
import DesignServicesTwoToneIcon from "@mui/icons-material/DesignServicesTwoTone";
import SupportTwoToneIcon from "@mui/icons-material/SupportTwoTone";
import ReceiptTwoToneIcon from "@mui/icons-material/ReceiptTwoTone";
import BackupTableTwoToneIcon from "@mui/icons-material/BackupTableTwoTone";
import SmartToyTwoToneIcon from "@mui/icons-material/SmartToyTwoTone";

export interface MenuItem {
  link?: string;
  icon?: ReactNode;
  badge?: string;
  items?: MenuItem[];
  name: string;
}

export interface MenuItems {
  items: MenuItem[];
  heading: string;
}

const menuItems: MenuItems[] = [
  {
    heading: "Layout Blueprints",
    items: [
      {
        name: "Choose layout",
        icon: BackupTableTwoToneIcon,
        badge: "New",
        link: "",
        items: [
          {
            name: "Accent header",
            link: "/dashboards/analytics"
          },
          {
            name: "Accent sidebar",
            link: "/accent-sidebar/dashboards"
          },
          {
            name: "Boxed sidebar",
            link: "/boxed-sidebar/dashboards"
          },
          {
            name: "Collapsed sidebar",
            link: "/collapsed-sidebar/dashboards"
          },
          {
            name: "Bottom navigation",
            link: "/bottom-navigation/dashboards"
          },
          {
            name: "Top navigation",
            link: "/top-navigation/dashboards"
          }
        ]
      }
    ]
  },
  {
    heading: "Dashboards",
    items: [
      {
        name: "Automation",
        icon: SmartToyTwoToneIcon,
        link: "/dashboards/automation",
        badge: "Hot"
      },
      {
        name: "Analytics",
        icon: AnalyticsTwoToneIcon,
        link: "/dashboards/analytics"
      },
      {
        name: "Banking",
        icon: AccountBalanceTwoToneIcon,
        link: "/dashboards/banking"
      },
      {
        name: "Commerce",
        icon: StoreTwoToneIcon,
        link: "/dashboards/commerce"
      },
      {
        name: "Crypto",
        icon: AccountBalanceWalletTwoToneIcon,
        link: "/dashboards/crypto"
      },
      {
        name: "Finance",
        icon: MonetizationOnTwoToneIcon,
        link: "/dashboards/finance"
      },
      {
        name: "Fitness",
        icon: KitchenTwoToneIcon,
        link: "/dashboards/fitness"
      },
      {
        name: "Healthcare",
        icon: HealthAndSafetyTwoToneIcon,
        link: "/dashboards/healthcare",
        items: [
          {
            name: "Doctors Page",
            badge: "Hot",
            link: "/dashboards/healthcare/doctor"
          },
          {
            name: "Hospital Overview",
            link: "/dashboards/healthcare/hospital"
          }
        ]
      },
      {
        name: "Helpdesk",
        icon: ContactSupportTwoToneIcon,
        link: "/dashboards/helpdesk"
      },
      {
        name: "Learning",
        icon: LocalLibraryTwoToneIcon,
        link: "/dashboards/learning"
      },
      {
        name: "Monitoring",
        icon: DnsTwoToneIcon,
        link: "/dashboards/monitoring"
      },
      {
        name: "Tasks",
        icon: TaskAltTwoToneIcon,
        link: "/dashboards/tasks"
      }
    ]
  },
  {
    heading: "Applications",
    items: [
      {
        name: "Calendar",
        icon: EventNoteTwoToneIcon,
        link: "/applications/calendar"
      },
      {
        name: "File Manager",
        icon: DocumentScannerTwoToneIcon,
        link: "/applications/file-manager"
      },
      {
        name: "Jobs Platform",
        icon: WorkTwoToneIcon,
        link: "/applications/jobs-platform"
      },
      {
        name: "Mailbox",
        icon: MarkunreadMailboxTwoToneIcon,
        link: "/applications/mailbox/inbox"
      },
      {
        name: "Messenger",
        icon: QuestionAnswerTwoToneIcon,
        link: "/applications/messenger"
      },
      {
        name: "Projects Board",
        icon: DashboardCustomizeTwoToneIcon,
        link: "/applications/projects-board"
      }
    ]
  },
  {
    heading: "Management",
    items: [
      {
        name: "Users",
        icon: AssignmentIndTwoToneIcon,
        link: "/management/users",
        items: [
          {
            name: "List All",
            link: "/management/users"
          },
          {
            name: "User Profile",
            link: "/management/user/2"
          }
        ]
      },
      {
        name: "Projects",
        icon: AccountTreeTwoToneIcon,
        link: "/management/projects/list"
      },
      {
        name: "Commerce",
        icon: StorefrontTwoToneIcon,
        link: "/management/commerce",
        items: [
          {
            name: "Shop",
            link: "/management/commerce/shop"
          },
          {
            name: "Products List",
            link: "/management/commerce/products"
          },
          {
            name: "View Product",
            link: "/management/commerce/product/2"
          },
          {
            name: "Create Product",
            link: "/management/commerce/product/create"
          }
        ]
      },
      {
        name: "Invoices",
        icon: ReceiptTwoToneIcon,
        link: "/management/invoices",
        items: [
          {
            name: "List All",
            link: "/management/invoices/list"
          },
          {
            name: "View Single",
            link: "/management/invoice/7"
          }
        ]
      }
    ]
  },
  {
    heading: "Extra Pages",
    items: [
      {
        name: "Auth Pages",
        icon: VpnKeyTwoToneIcon,
        link: "/auth",
        items: [
          {
            name: "Login",
            items: [
              {
                name: "Basic",
                link: "/account/login-basic"
              },
              {
                name: "Cover",
                link: "/account/login-cover"
              }
            ]
          },
          {
            name: "Register",
            items: [
              {
                name: "Basic",
                link: "/account/register-basic"
              },
              {
                name: "Cover",
                link: "/account/register-cover"
              },
              {
                name: "Wizard",
                link: "/account/register-wizard"
              }
            ]
          },
          {
            name: "Recover Password",
            link: "/account/recover-password"
          }
        ]
      },
      {
        name: "Status",
        icon: ErrorTwoToneIcon,
        link: "/status",
        items: [
          {
            name: "Error 404",
            link: "/status/404"
          },
          {
            name: "Error 500",
            link: "/status/500"
          },
          {
            name: "Maintenance",
            link: "/status/maintenance"
          },
          {
            name: "Coming Soon",
            link: "/status/coming-soon"
          }
        ]
      }
    ]
  },
  {
    heading: "Foundation",
    items: [
      {
        name: "Overview",
        link: "/overview",
        icon: DesignServicesTwoToneIcon
      },
      {
        name: "Documentation",
        icon: SupportTwoToneIcon,
        link: "/docs"
      }
    ]
  }
];

export default menuItems;
