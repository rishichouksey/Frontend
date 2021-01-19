import { SideNavItems, SideNavSection } from '@modules/navigation/models';

export const sideNavSections: SideNavSection[] = [
    {
        text: 'Home',
        items: ['dashboard'],
    },
];

export const sideNavItems: SideNavItems = {
    dashboard: {
        icon: 'chart-bar',
        text: 'Dashboards',
        link: '/dashboard',
    },
 
};