import React from "react";
import { getAssessments } from "@/actions/interview";
import StatsCards from "./components/statsCards";
import PerformanceCharts from "./components/performance-chart";
import QuizList from "./components/quiz-list";

const InterviewPage = async () => {
  const assessments = await getAssessments();

  return (
    <div>
      <h1 className="text-6xl font-bold md:text-6xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-gray-700/100 via-gray-300 to-gray-700/100 dark:from-gray-200 dark:via-gray-500 dark:to-gray-300 mb-5">
        Interview Preparation
      </h1>

      <div className="space-y-6">
        <StatsCards assessments={assessments} />
        <PerformanceCharts assessments={assessments} />
        <QuizList assessments={assessments} />
      </div>
    </div>
  );
};

export default InterviewPage;
