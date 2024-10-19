library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

entity vhdl_sm is
    port (
        finish_strb: out std_logic;
        
        clk   : in std_logic;
        reset : in std_logic
        

    );
end entity vhdl_sm;

architecture rtl of vhdl_sm is
type sm_t is (IDLE,PUSH_A,PUSH_B,CRC); --! My State machine
signal state : sm_t;
signal next_state : sm_t;    

signal push_a_done: std_logic;
signal push_b_done: std_logic;
signal new_data: std_logic;
signal crc_done: std_logic;

begin

incr_sm_proc: process (clk,reset)
begin
    if (reset = '0') then
        state <= IDLE;
    elsif rising_edge(clk) then
       state <= next_state; 
    end if;
end process;


sm_proc: process(all)
begin
    case state is
        when IDLE =>
            if (new_data = '1') then
                next_state <= PUSH_A;
            end if;
        when PUSH_A =>
            if (push_a_done='1') then
                next_state <= PUSH_B;
            elsif (push_a_done='1' and push_b_done='1') then
                next_state <= CRC;
            end if;
        when PUSH_B =>
            if (push_b_done='1') then
                next_state <= PUSH_A;
            end if;
        when CRC =>
            next_state <= IDLE;
        when others =>
            next_state <= IDLE;
    end case;
end process;

finish_strb <= '1' when next_state=CRC else '0';

end architecture;