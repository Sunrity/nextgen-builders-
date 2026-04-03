"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedPosts, setExpandedPosts] = useState([]);

  // Posts for each category (7 posts each) with longer content
  const posts = {
    "Mindset": [
      { id: 1, title: "The Power of a Growth Mindset", content: "Developing a growth mindset is essential for long-term success. Embrace challenges, learn from feedback, and understand that your abilities can be improved through effort and persistence. Those who adopt this mindset overcome setbacks more effectively and achieve more than those with a fixed mindset." },
      { id: 2, title: "Building Resilience", content: "Resilience allows you to bounce back from failures and difficulties. By facing challenges head-on and reflecting on setbacks, you build emotional strength and mental toughness. Resilient individuals adapt quickly and remain focused on long-term goals despite obstacles." },
      { id: 3, title: "Daily Positive Habits", content: "Small daily habits have a cumulative effect on your mindset. From journaling and gratitude exercises to regular reflection and learning, these habits shape your perspective and improve mental well-being. Consistency in positive habits creates lasting personal growth." },
      { id: 4, title: "Overcoming Fear", content: "Fear often prevents people from taking the necessary steps to grow. Confronting fears gradually, seeking support, and taking calculated risks can turn fear into motivation. Courage is not the absence of fear but the ability to act despite it." },
      { id: 5, title: "Self-Motivation", content: "Self-motivation is the inner drive that pushes you toward your goals even when external encouragement is low. It requires clarity of purpose, visualization of success, and daily actions that align with your objectives. Cultivating self-motivation builds independence and resilience." },
      { id: 6, title: "Learning from Failure", content: "Failures are invaluable teachers. By analyzing what went wrong, adjusting your approach, and taking responsibility, failure becomes a stepping stone to success. Those who embrace failure learn faster and grow more than those who avoid it." },
      { id: 7, title: "Visualization Techniques", content: "Visualization helps you mentally rehearse success and boosts confidence. By imagining each step toward your goals and feeling the emotions of achievement, you train your brain to focus on solutions and take aligned actions. This technique improves performance and clarity." },
    ],
    "Leadership": [
      { id: 8, title: "Leadership Principles", content: "Effective leaders inspire others by setting an example. They demonstrate integrity, communicate vision clearly, and empower their teams. Leadership is not just about authority, but about serving and guiding others toward shared objectives." },
      { id: 9, title: "Effective Communication", content: "Good communication builds trust, aligns teams, and ensures that everyone understands the goals. Listening actively, providing feedback, and articulating ideas clearly are essential for influencing and motivating others." },
      { id: 10, title: "Decision Making", content: "Leaders constantly make decisions that impact their teams and organizations. Good decision-making involves gathering information, considering consequences, consulting stakeholders, and acting decisively. Learning from past decisions strengthens future judgment." },
      { id: 11, title: "Conflict Resolution", content: "Conflict is natural in any group. Effective leaders address disagreements with empathy, fairness, and clarity. Resolving conflicts promptly maintains morale and strengthens relationships while ensuring focus remains on shared goals." },
      { id: 12, title: "Delegation Skills", content: "Delegation allows leaders to empower team members and focus on higher-level responsibilities. Knowing the strengths of your team, providing clear instructions, and trusting others ensures projects succeed while fostering growth and accountability." },
      { id: 13, title: "Vision and Strategy", content: "A clear vision guides every decision and inspires your team. Leaders must articulate both the vision and the strategy for achieving it. A well-communicated plan aligns resources, sets priorities, and drives consistent progress." },
      { id: 14, title: "Building Trust", content: "Trust is foundational for effective leadership. Leaders build trust by being reliable, transparent, and supportive. When teams trust their leaders, they are more engaged, motivated, and committed to collective success." },
    ],
    "Self Development": [
      { id: 15, title: "Time Management", content: "Effective time management allows you to prioritize tasks, reduce stress, and achieve more in less time. Planning your day, setting deadlines, and avoiding distractions ensures consistent progress toward your personal and professional goals." },
      { id: 16, title: "Continuous Learning", content: "Personal growth comes from consistently acquiring new knowledge and skills. By reading, attending workshops, seeking mentorship, and applying what you learn, you stay competitive, adaptable, and innovative." },
      { id: 17, title: "Goal Setting", content: "Setting clear, measurable goals provides direction and motivation. Breaking down goals into actionable steps and tracking progress increases accountability and achievement. Goals help you focus on what truly matters." },
      { id: 18, title: "Mindfulness Practices", content: "Mindfulness allows you to remain present, reduce stress, and increase awareness of thoughts and feelings. Regular mindfulness practices, such as meditation and reflective journaling, enhance mental clarity and emotional regulation." },
      { id: 19, title: "Building Confidence", content: "Confidence grows when you consistently practice, face challenges, and reflect on achievements. Small successes build self-assurance, enabling you to take bigger steps and embrace new opportunities." },
      { id: 20, title: "Networking Effectively", content: "Building meaningful relationships supports growth and opens new opportunities. Approach networking with authenticity, offer value, and stay connected to create mutually beneficial relationships." },
      { id: 21, title: "Self-Discipline", content: "Discipline bridges the gap between goals and accomplishment. By setting routines, managing impulses, and committing to consistent effort, you develop the resilience and focus required for long-term success." },
    ],
    "React": [
      { id: 22, title: "React Basics", content: "React allows you to build dynamic user interfaces efficiently. Understanding components, props, and state is essential for creating interactive and maintainable applications." },
      { id: 23, title: "React Hooks", content: "Hooks like useState, useEffect, and useContext enable functional components to handle state, side effects, and global data effectively. Mastering hooks is essential for modern React development." },
      { id: 24, title: "Component Reusability", content: "Creating reusable components saves time and reduces redundancy. By designing components with flexibility and modularity, you improve maintainability and scalability of your applications." },
      { id: 25, title: "React Context API", content: "The Context API allows global state management without prop drilling. This improves code clarity and enables easier sharing of state across multiple components." },
      { id: 26, title: "React Router", content: "React Router enables client-side routing, allowing multiple pages in a single-page application. Proper routing improves user experience and app performance." },
      { id: 27, title: "Optimizing Performance", content: "Optimize React apps using lazy loading, memoization, and minimizing unnecessary re-renders. Performance optimization improves speed and user experience." },
      { id: 28, title: "Advanced Patterns", content: "Higher-order components, render props, and custom hooks are advanced React patterns. They allow for more reusable, flexible, and maintainable code." },
    ],
    "Wisdom": [
      { id: 29, title: "Believe in Yourself", content: "Believing in yourself is the first step toward achieving your goals. Self-confidence and a positive mindset empower you to overcome challenges and pursue your passions with determination." },
      { id: 30, title: "Embrace Change", content: "Change is inevitable and often brings growth opportunities. By adapting and remaining open-minded, you can turn challenges into advantages." },
      { id: 31, title: "Consistency is Key", content: "Small, consistent efforts compound over time. Persistence and regular action are more powerful than sporadic bursts of effort." },
      { id: 32, title: "Positive Thinking", content: "Your thoughts shape your reality. Focusing on solutions and opportunities rather than problems helps you maintain a proactive and optimistic approach to life." },
      { id: 33, title: "Learn from Everyone", content: "Every person you encounter has knowledge or experience that can teach you something. Stay humble and receptive to continuous learning." },
      { id: 34, title: "Take Responsibility", content: "Owning your actions and decisions accelerates personal growth. Accountability empowers you to learn and adapt faster." },
      { id: 35, title: "Act with Purpose", content: "Set clear intentions and pursue actions that align with your long-term goals. Purpose-driven decisions lead to meaningful results." },
    ]
  };

  const categories = ["All", "Mindset", "Leadership", "Self Development", "React", "Wisdom"];

  const displayedPosts = selectedCategory === "All"
    ? Object.values(posts).flat()
    : posts[selectedCategory];

  const toggleReadMore = (id) => {
    setExpandedPosts(prev =>
      prev.includes(id) ? prev.filter(postId => postId !== id) : [...prev, id]
    );
  };

  return (
    <div className="blog-page bg-gray-50 text-gray-800 min-h-screen px-4 py-16">

      {/* HERO */}
      <section className="text-center mt-10 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-700">Our Blog</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-6">
          Explore posts on mindset, leadership, self-development, wisdom and  React development.
        </p>
      </section>

      {/* CATEGORY BUTTONS */}
      <div className="flex justify-center flex-wrap gap-3 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg font-semibold transition-transform transform ${
              selectedCategory === category
                ? "bg-blue-700 text-white scale-105 shadow-lg"
                : "bg-white text-gray-700 shadow hover:shadow-md hover:bg-blue-100 hover:text-blue-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* BLOG POSTS */}
      <section className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedPosts.map(post => (
          <Card key={post.id} className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition hover:scale-105">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">{post.title}</h2>
            <p className="text-gray-700 text-sm mb-4">
              {expandedPosts.includes(post.id) ? post.content : post.content.slice(0, 150) + "..."}
            </p>
            <Button
              onClick={() => toggleReadMore(post.id)}
              className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
            >
              {expandedPosts.includes(post.id) ? "Show Less" : "Read More"}
            </Button>
          </Card>
        ))}
      </section>

    </div>
  );
};

export default BlogPage;