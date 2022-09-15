By: Chris Klingsporn 

project: DOM-Project (masterschool assignment; landing page.)


functions explained in order of appearance: 

    isSectionOnScreen()
        makes use of getBoundingClientRect to return true/false

    activateSectionOnScroll() 
        Makes use of isSectionOnScreen to set/remove active class to class="navitem" and <article>

    createNavigation()
        gets "articleList" and creates the "nav" section by using their own datasets/names

    SmoothScrollNav()
        listens to clicks on "nav" items, prevents default and uses native scrollIntoView() and applies "smooth" behavior

    CheckAnyTicked()
        Looks for any of the checkboxes within the page to be ticked. (W.I.P)
        TODO: Limit this to only checkboxes within parent <form>

