import React from 'react';
import StickyBox from 'react-sticky-box';
import * as S from './styles';

import SearchInput from '../SearchInput/searchInput';
import SideList from '../SideList/sideList';
import FollowSuggestion from '../FollowSuggestion/followSuggestion';
import News from '../News/news';

export default function SideBar() {
    return (
        <S.SideBarContainer>
            <SearchInput />
            <StickyBox>
            <S.SideBarBody>
                <SideList 
                    title="Talvez você curta"
                    elements={[
                        <FollowSuggestion 
                            name="Gio Corredori"
                            nickname="@giocorredorii"
                        />,
                        <FollowSuggestion 
                            name="Leonardo DiCaprio"
                            nickname="@leoDicaprio"
                        />,
                        <FollowSuggestion 
                            name="Brad Pitt"
                            nickname="@gorlammi"
                        />,
                    ]}
                />  
                <SideList 
                    title="O que está acontecendo"
                    elements={[
                        <News />,
                        <News />,
                        <News />,
                    ]}
                />  
                <SideList 
                    title="O que está acontecendo"
                    elements={[
                        <News />,
                        <News />,
                        <News />,
                    ]}
                />  
                <SideList 
                    title="O que está acontecendo"
                    elements={[
                        <News />,
                        <News />,
                        <News />,
                    ]}
                />  
            </S.SideBarBody>   
            </StickyBox>
        </S.SideBarContainer>
    )
}
