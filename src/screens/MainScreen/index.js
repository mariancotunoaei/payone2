import { useSelector } from 'react-redux';
import React from 'react';
import FormGenerator from './FormGenerator';
import WorkflowProgressBar from 'stories/WorkflowProgressBar';
import ScreenNotFound from 'screens/ScreenNotFound';
import './index.scss';

const getTranslationFor = (messageId, translations = {}) => {
    return translations[messageId] || `No translation found for this message: ${messageId}`;
};

const MainScreen = props => {
    const applicationStructure = useSelector(state => state.applicationStructure) || {};
    const translations = useSelector(state => state.translations) || {};
    const displayFieldValidations = useSelector(state => state.chapterActions.displayFieldValidations) || false;
    const refreshAllFields = useSelector(state => state.chapterActions.refreshAllFields) || 0;

    let currentChapter = {};
    let currentChapterIndex = -1;
    let totalNumberOfChapters = 0;

    if (applicationStructure.chapters) {
        totalNumberOfChapters = applicationStructure.chapters.length;
        currentChapter = applicationStructure.chapters[applicationStructure.activeScreen - 1];
    }

    if (!currentChapter) {
        return <ScreenNotFound />;
    }

    currentChapterIndex = currentChapter.sequence || -1;

    if (currentChapterIndex === -1) {
        return <div></div>;
    }
    // const { sections = [] } = currentChapter;

    const { title = '', subtitle = '', sections = [], code } = currentChapter;

    return (
        <div className='main-screen screen'>
            <WorkflowProgressBar crtChapter={applicationStructure.activeScreen} totalChapters={totalNumberOfChapters} />
            <div className='chapter-wrapper'>
                <div className='chapter-header'>
                    <div className='chapter-title'> {getTranslationFor(title, translations)} </div>
                    <div className='chapter-subtitle'> {getTranslationFor(subtitle, translations)} </div>
                </div>
                <div className='chapter-body'>
                    <FormGenerator
                        currentChapterIndex={currentChapterIndex}
                        currentChapterCode={code}
                        currentChapterRenderConditions={currentChapter.renderConditions}
                        totalNumberOfChapters={totalNumberOfChapters}
                        sections={sections}
                        translate={messageId => getTranslationFor(messageId, translations)}
                        displayFieldValidations={displayFieldValidations}
                        refreshAllFields={refreshAllFields}
                    />
                </div>
            </div>
        </div>
    );
};

export default MainScreen;
