// assets
import { DashboardOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'Neuro',
      title: 'Neuro Hospital',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'Stroke',
      title: 'Stroke',
      type: 'item',
      url: '/dashboard/stroke',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'nihhs',
      title: 'NIHHS',
      type: 'item',
      url: '/dashboard/nihhss',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'stroke-trail',
      title: 'Stroke Trail',
      type: 'item',
      url: '/dashboard/strokeTrail',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'priorities',
      title: 'Priorities',
      type: 'item',
      url: '/dashboard/priorities',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'communication',
      title: 'Communication',
      type: 'item',
      url: '/dashboard/communication',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
