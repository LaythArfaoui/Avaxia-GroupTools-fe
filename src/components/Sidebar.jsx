import React, { useState } from 'react';
import { Menu, X, Wifi, FolderKanban, TrendingUp } from 'lucide-react';
import logo from '../assets/layth.png'; // Ensure the path to your logo is correct

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { icon: <Wifi size={20} />, text: 'Connections' },
    { icon: <FolderKanban size={20} />, text: 'Projects' },
    { icon: <TrendingUp size={20} />, text: 'Advanced' },
  ];

  // Cards with logos and links
  const cards = [
    { name: 'GitHub', link: 'https://github.com', logo: 'https://www.logo.wine/a/logo/GitHub/GitHub-Logo.wine.svg' },
    { name: 'GitLab', link: 'https://gitlab.com', logo: 'https://brandeps.com/logo-download/G/GitLab-Icon-logo-vector-01.svg' },
    { name: 'Jira', link: 'https://www.atlassian.com/software/jira', logo: 'https://cdn.icon-icons.com/icons2/2429/PNG/512/jira_logo_icon_147274.png' },
    { name: 'Argo CD', link: 'https://argo-cd.readthedocs.io/en/stable/', logo: 'https://icon.icepanel.io/Technology/svg/Argo-CD.svg' },
    { name: 'Bitbucket', link: 'https://bitbucket.org', logo: 'https://banner2.cleanpng.com/20180823/wvi/kisspng-bitbucket-computer-software-github-clip-art-git-browser-1713950687319.webp' },
    { name: 'Azure DevOps', link: 'https://dev.azure.com', logo: 'https://www.azuredevopslabs.com/images/AzureDevOps-EtoE.png' },
    { name: 'SonarQube', link: 'https://www.sonarqube.org', logo: 'https://blog.pleets.org/img/articles/sonarqube-icon.jpg' },
    { name: 'PagerDuty', link: 'https://www.pagerduty.com', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdJSxUYSjsb6LI8Rd8SWo2SEptPVOBaS6yBw&s' },
    { name: 'OWASP ZAP', link: 'https://www.zaproxy.org/', logo: 'https://appstore.edgenexus.io/wp-content/uploads/2022/08/Group-26.jpg' },
    { name: 'Locust', link: 'https://locust.io/', logo: 'https://pbs.twimg.com/profile_images/1808582791661010944/cEr5Fbtn_400x400.jpg' },
  ];

  return (
    <>
      <button
        className="fixed top-4 left-4 z-50 md:hidden bg-blue-600 text-white p-2 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      <aside className={`
        fixed md:static w-64 h-screen bg-white border-r border-gray-200
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
      `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="h-32 flex flex-col items-center justify-center border-b bg-blue-950 text-white">
            <img src={logo} alt="Logo" className="h-16 mb-2" /> {/* Logo above text */}
            <h1 className="text-2xl font-bold italic">Avaxia Group Tools</h1> {/* Italicized text */}
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 bg-blue-950">
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="flex items-center gap-3 px-4 py-3 text-white rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      console.log(`Clicked ${item.text}`);
                    }}
                  >
                    {item.icon}
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content Section */}
      <main className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 max-w-screen-xl justify-center ml-40">
          {/* Map through the cards and render them */}
          {cards.map((card, index) => (
            <a
              key={index}
              href={card.link}
              target="_blank"
              className="flex flex-col items-center justify-center w-48 h-48 bg-blue-100 rounded-lg shadow-lg hover:bg-blue-200 transition-all transform hover:scale-105"
              aria-label={card.name}
            >
              <img src={card.logo} alt={card.name} className="w-24 h-24 mb-2" />
              <span className="text-sm">{card.name}</span>
            </a>
          ))}
        </div>
      </main>
    </>
  );
}

export default Sidebar;
