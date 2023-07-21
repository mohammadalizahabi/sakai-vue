import { toRefs, reactive, computed } from 'vue';

const layoutConfig = reactive({
    ralign: false,
    ripple: false,
    darkTheme: false,
    inputStyle: 'outlined',
    menuMode: 'static',
    theme: 'lara-light-indigo',
    scale: 14,
    activeMenuItem: null
});

const layoutState = reactive({
    rightalign : false,
    staticMenuDesktopInactive: false,
    overlayMenuActive: false,
    profileSidebarVisible: false,
    configSidebarVisible: false,
    staticMenuMobileActive: false,
    menuHoverActive: false
});

export function useLayout() {
    const changeAlign = () => {
        if (layoutConfig.ralign === false) {
            layoutState.rightalign = true;
            console.log(layoutState.rightalign)
        }
        layoutConfig.ralign = false;
    };

    const changeNoAlign = () => {
        if (layoutConfig.ralign) {
            layoutState.rightalign = false;
            console.log(layoutState.rightalign)
        }
        layoutConfig.ralign = false;
    };

    const changeThemeSettings = (theme, darkTheme) => {
        layoutConfig.darkTheme = darkTheme;
        layoutConfig.theme = theme;
    };

    const setScale = (scale) => {
        layoutConfig.scale = scale;
    };

    const setActiveMenuItem = (item) => {
        layoutConfig.activeMenuItem = item.value || item;
    };

    const onMenuToggle = () => {
        if (layoutConfig.menuMode === 'overlay') {
            layoutState.overlayMenuActive = !layoutState.overlayMenuActive;
        }

        if (window.innerWidth > 991) {
            layoutState.staticMenuDesktopInactive = !layoutState.staticMenuDesktopInactive;
        } else {
            layoutState.staticMenuMobileActive = !layoutState.staticMenuMobileActive;
        }
    };

    const isSidebarActive = computed(() => layoutState.overlayMenuActive || layoutState.staticMenuMobileActive);

    const isDarkTheme = computed(() => layoutConfig.darkTheme);

    return { layoutConfig: toRefs(layoutConfig), layoutState: toRefs(layoutState), changeThemeSettings, changeAlign, changeNoAlign, setScale, onMenuToggle, isSidebarActive, isDarkTheme, setActiveMenuItem };
}
