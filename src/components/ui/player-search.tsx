"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { getAllPlayers } from "@/lib/data/players";
import { getPlayerImageUrl } from "@/lib/utils";

interface PlayerSearchProps {
  placeholder?: string;
  className?: string;
  onPlayerSelect?: (player: any) => void;
}

export function PlayerSearch({ 
  placeholder = "Search players by name, region, or club...", 
  className = "",
  onPlayerSelect 
}: PlayerSearchProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const players = getAllPlayers();

  // Filter players based on query
  useEffect(() => {
    if (query.length >= 2) {
      const filtered = players.filter(player => 
        player.name.toLowerCase().includes(query.toLowerCase()) ||
        player.region.toLowerCase().includes(query.toLowerCase()) ||
        player.club.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8); // Limit to 8 results
      
      setResults(filtered);
      setIsOpen(true);
      setSelectedIndex(-1);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query, players]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || results.length === 0) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < results.length - 1 ? prev + 1 : prev
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : prev);
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0 && results[selectedIndex]) {
          handlePlayerSelect(results[selectedIndex]);
        }
        break;
      case "Escape":
        setIsOpen(false);
        setSelectedIndex(-1);
        break;
    }
  };

  const handlePlayerSelect = (player: any) => {
    setQuery(player.name);
    setIsOpen(false);
    setSelectedIndex(-1);
    
    if (onPlayerSelect) {
      onPlayerSelect(player);
    }
    
    // Navigate to player profile
    window.location.href = `/players/${player.slug}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleInputFocus = () => {
    if (query.length >= 2 && results.length > 0) {
      setIsOpen(true);
    }
  };

  const handleInputBlur = () => {
    // Delay closing to allow clicks on results
    setTimeout(() => {
      setIsOpen(false);
      setSelectedIndex(-1);
    }, 150);
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          placeholder={placeholder}
          className="w-full px-4 py-2 pl-10 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Search Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div 
          ref={resultsRef}
          className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto"
        >
          {results.map((player, index) => (
            <div
              key={player.id}
              onClick={() => handlePlayerSelect(player)}
              className={`flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-100 last:border-b-0 ${
                index === selectedIndex ? 'bg-blue-50' : ''
              }`}
            >
              <div className="relative flex-shrink-0">
                <Image
                  src={getPlayerImageUrl(player.name, player.avatar)}
                  alt={player.name}
                  width={36}
                  height={36}
                  className="rounded-full object-cover"
                />
                <div className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold px-1 py-0.5 rounded-full min-w-[18px] text-center">
                  {player.rank}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-gray-900 text-sm truncate">
                  {player.name}
                </div>
                <div className="text-xs text-gray-600 truncate">
                  {player.region} • {player.club}
                </div>
              </div>
              <div className="flex-shrink-0 text-right">
                <div className="text-xs text-gray-500">
                  {player.rating}
                </div>
                <div className="text-xs text-gray-400">
                  {player.seasonStats.matchesWon}W-{player.seasonStats.matchesLost}L
                </div>
              </div>
            </div>
          ))}
          
          {/* Show more results indicator */}
          {results.length === 8 && (
            <div className="px-3 py-2 text-center text-xs text-gray-500 bg-gray-50 rounded-b-lg">
              <Link href="/players" className="text-blue-600 hover:underline font-medium">
                View all players →
              </Link>
            </div>
          )}
        </div>
      )}

      {/* No results message */}
      {isOpen && query.length >= 2 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4">
          <div className="text-center text-gray-500">
            <div className="text-sm">No players found for "{query}"</div>
            <div className="text-xs mt-1">Try searching by name, region, or club</div>
          </div>
        </div>
      )}
    </div>
  );
}
