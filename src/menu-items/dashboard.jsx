// assets
import { DashboardOutlined } from '@ant-design/icons';
import neuroIcon from '../assets/images/icons/neurology.png';
import strokeIcon from '../assets/images/icons/stroke.png';
import nihhsIcon from '../assets/images/icons/nihhs-icon-black.png';
import strokeTrailIcon from '../assets/images/icons/stroke-trail.png';
import prioritiesIcon from '../assets/images/icons/priorities.png';
import communicationsIcon from '../assets/images/icons/communications.png';

// NeuroIcon 
const NeuroIcon = () => {
  return (
    <img src={neuroIcon} alt="neuroIcon" width="19" height="19" />
  );
}
// StrokeIcon 
const StrokeIcon = () => {
  return (
    <img src={strokeIcon} alt="strokeIcon" width="19" height="19" />
  );
}
// NihhsIcon
const NihhsIcon = () => {
  return (
    <img src={nihhsIcon} alt="strokeIcon" width="19" height="19" />
  );
}
// StrokeTrailIcon
const StrokeTrailIcon = () => {
  return (
    <img src={strokeTrailIcon} alt="strokeIcon" width="19" height="19" />
  );
}
// PrioritiesIcon
const PrioritiesIcon = () => {
  return (
    <img src={prioritiesIcon} alt="strokeIcon" width="19" height="19" />
  );
}
// CommunicationsIcon
const CommunicationsIcon = () => {
  return (
    <img src={communicationsIcon} alt="strokeIcon" width="19" height="19" />
  );
}



// icons
const icons = {
  DashboardOutlined,
  NeuroIcon,
  StrokeIcon,
  NihhsIcon,
  StrokeTrailIcon,
  PrioritiesIcon,
  CommunicationsIcon
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
      icon: icons.NeuroIcon,
      breadcrumbs: false
    },
    {
      id: 'Stroke',
      title: 'Stroke',
      type: 'item',
      url: '/dashboard/stroke',
      icon: icons.StrokeIcon,
      breadcrumbs: false
    },
    {
      id: 'nihhs',
      title: 'NIHHS',
      type: 'item',
      url: '/dashboard/nihhss',
      icon: icons.NihhsIcon,
      breadcrumbs: false
    },
    {
      id: 'stroke-trail',
      title: 'Stroke Trail',
      type: 'item',
      url: '/dashboard/strokeTrail',
      icon: icons.StrokeTrailIcon,
      breadcrumbs: false
    },
    {
      id: 'priorities',
      title: 'Priorities',
      type: 'item',
      url: '/dashboard/priorities',
      icon: icons.PrioritiesIcon,
      breadcrumbs: false
    },
    {
      id: 'communication',
      title: 'Communication',
      type: 'item',
      url: '/dashboard/communication',
      icon: icons.CommunicationsIcon,
      breadcrumbs: false
    }
  ]
};

export default dashboard;


