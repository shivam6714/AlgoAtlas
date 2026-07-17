import { useEffect, useState } from "react";

const useScrollSpy = (sectionIds) => {
    const [activeSection, setActiveSection] = useState(sectionIds[0]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSection = entries.find(
                    (entry) => entry.isIntersecting
                );

                if (visibleSection) {
                    setActiveSection(visibleSection.target.id);
                }
            },
            {
                threshold: 0.35,
                rootMargin: "-80px 0px -50% 0px",
            }
        );

        sectionIds.forEach((id) => {
            const element = document.getElementById(id);

            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, [sectionIds]);

    return activeSection;
};

export default useScrollSpy;