import { useCallback, useState, useEffect } from 'react';
import SidebarService from '../services/Sidebar.service';

const useSidebar = (toggleSidebar) => {
  const [sidebarItems, setSidebarItems] = useState([]);
  const [asideClasses, setAsideClasses] = useState([]);
  const [resizeSidebar, setResizeSidebar] = useState(false);

  const handleResize = useCallback(() => {
    checkMobile(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const sidebarItemsTemp = SidebarService.getSidebarItems();
    setSidebarItems([...sidebarItemsTemp]);

    const aClasses = toggleSidebar ? ['sidebar', 'sidebar-show'] : ['sidebar'];
    setAsideClasses(aClasses);
  }, [toggleSidebar]);

  const onToggleSidebar = (resizeSidebar) => {
    setResizeSidebar(resizeSidebar);
    let aClasses = [...asideClasses];
    if (resizeSidebar) {
      aClasses.push('sidebar-resized');
    } else {
      aClasses = aClasses.filter((c) => {
        return c !== 'sidebar-resized';
      });
    }
    setAsideClasses(aClasses);
  };

  const checkMobile = (windowSize) => {
    if (windowSize <= 768) {
      onToggleSidebar(false);
    }
  };

  return {
    asideClasses: asideClasses.join(' '),
    onToggleSidebar,
    resizeSidebar,
    sidebarItems,
  };
};

export default useSidebar;
