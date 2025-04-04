import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-black py-8">
      {/* Container centers the layout and adds gutter on both sides */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 px-4 lg:px-0">
        {/* Sidebar */}
        <aside className="lg:w-[300px] lg:sticky lg:top-8 h-fit">
          <Sidebar />
        </aside>

        {/* Main content */}
        <main className="flex-1">
          <MainContent />
        </main>
      </div>
    </div>
  );
};

export default Layout;
