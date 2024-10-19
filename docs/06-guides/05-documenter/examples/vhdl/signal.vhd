library ieee;
use ieee.std_logic_1164.all;


entity mysignal is
    port (
        clk   : in std_logic;
        reset : in std_logic
        
    );
end entity mysignal;

architecture rtl of mysignal is
signal sig_a : std_logic_vector(31 downto 0);
signal sig_b : std_logic_vector(31 downto 0);

signal sig_c : std_logic; --! example documentation

signal data_a: integer range 0 to 1023;
begin

    

end architecture;