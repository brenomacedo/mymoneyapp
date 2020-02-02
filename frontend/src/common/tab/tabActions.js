export function selectTab(id) {

    return {
        type: 'TAB_SELECTED',
        payload: id
    }
}

export function showTabs(...tabsIds) {
    const tabsToShow = {  }
    tabsIds.forEach(e => tabsToShow[e] = true)

    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}