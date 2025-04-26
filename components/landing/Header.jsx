const Header = () => {
    return (
        <div class="flex justify-between">
        <h1 class="font-bold text-3xl">Discover Events</h1>

      
        <div>
          <input type="text" placeholder="Search..."
            class="bg-[#27292F] border border-[#CCCCCC]/20 py-1 px-2 rounded-md" />
        </div>
      </div>
    );
};

export default Header;